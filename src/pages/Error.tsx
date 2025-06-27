import { useNavigate, useRouteError, type ErrorResponse, type NavigateFunction } from 'react-router';
import MainNav from '../layout/MainNav';
import ErrorModal from '../components/modal/ErrorModal';
import { ClientRoutes_absolute } from '../ultil/clientRoutes';

export default function Error() {
    const error = useRouteError() as Error & ErrorResponse;
    let nav: NavigateFunction | undefined = useNavigate()
    if (error.status !== 401)
        nav = undefined

    let statusText = error.statusText || 'Error'
    let message = error.data?.message || 'Something went wrong!'

    // message = JSON.parse(error.data).message
    if (error.status === 404) {
        statusText = 'Not Found!'
        message = 'Could not find resoure or page.'
    }
    else if (error.status === 401) {
        statusText = error.statusText || 'Unauthorized'
        message = error.data?.message || 'You do not have permission for this resoure.'
        // message = error.data.message
    }
    else if (error.status === 500)
        message = error.data?.message || 'Server error'

    return (
        <>
            <MainNav />
            <div className='h-32 lg:h-60'></div>
            <div className='flex flex-col items-center w-full gap-5'>
                <h3 className='uppercase text-3xl font-bold '>{statusText}</h3>
                <p>{message}</p>
            </div>
            <div className='h-96'></div>
            <ErrorModal truthyFnc={() => nav?.(ClientRoutes_absolute.Login)} />
        </>
    )
}
