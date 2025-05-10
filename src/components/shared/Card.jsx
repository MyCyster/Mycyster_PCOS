import PropTypes from "prop-types";

export const Card = (props) => {
    return (
        <div className="my-6">
            <div className="border rounded-t-lg flex justify-between items-center py-3 px-6">
                <div>
                    <h2 className="text-lg font-semibold font-inter">{props.cardTitle}</h2>
                </div>
                <div>
                    {props.cardAction}
                </div>
            </div>
            <div className="border rounded-b-lg">
                {props.children}
            </div>
        </div>
    )
}

Card.propTypes = {
    cardTitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    cardAction: PropTypes.node
};