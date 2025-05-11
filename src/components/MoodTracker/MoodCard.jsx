import PropTypes from "prop-types";

export const MoodCard = (props) => {
    return (
        <div className="my-6">
            <div className="border rounded-t-lg flex justify-between py-5 px-6">
                <div>
                    <h2 className="text-2xl font-bold font-">{props.cardTitle}</h2>
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

MoodCard.propTypes = {
    cardTitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    cardAction: PropTypes.node
};