import load from '../assets/refresh.svg';

const Load = () => {
    return ( 
        <div className="absolute z-40 top-0 left-0 w-full h-full bg-white">
            <div className="w-full h-full grid place-items-center">
                <div className="w-40 flex flex-col justify-center items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" className="animate-spin fill-none w-8 h-8 stroke-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                <span className='text-sm font-semibold tracking-wide'>Loading...</span>
                </div>
            </div>
        </div>
    );
}
 
export default Load;