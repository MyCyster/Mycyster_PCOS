import PropTypes from "prop-types";
import { Button } from "./Button";

export const EmptyState = ({header, subheader, loading, onClick, btnText}) => {
    return (
        <div className='w-1/2 m-auto my-8 text-center'>
            <h2 className='font-semibold text-2xl mb-2'>{header}</h2>
            <p className='font-medium text-xl mb-10'>{subheader}</p>
            <svg className='m-auto' width="201" height="128">
                <use xlinkHref="/icon-sprite.svg#emptyMoodState" />
            </svg>
            {!loading && <Button onClick={onClick} className="bg-primary text-white border border-primary rounded-xl font-bold text-base mt-6 hover:shadow-lg hover:bg-primary-300">
                {btnText}
            </Button>}
        </div>
    )
}

EmptyState.propTypes = {
    header: PropTypes.string.isRequired,
    subheader: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    btnText: PropTypes.string
};