import PropTypes from 'prop-types';


export const Card = (props) => {
  return (
        <>
            <div className="max-w-sm bg-white rounded-lg shadow  sm:my-6 my-6 border-[1px] border-[#dbdbdb]">
                <a >
                <img className="rounded-t-lg" src={props.image} />
                </a>
                <div className="p-5">
                    <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-600 ">{props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">{props.description}</p>
                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " href='#'>
                    ver mas
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </a>
                </div>
            </div>
        </>
    )



}

Card.propTypes = {
    image : PropTypes.any,
    title : PropTypes.string,
    description : PropTypes.string,
}
