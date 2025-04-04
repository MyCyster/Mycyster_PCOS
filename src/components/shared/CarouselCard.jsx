import PropTypes from "prop-types";

export const CarouselCard = ({children, actions, className, title, subtitle}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p>{subtitle}</p>
        </div>
        {actions}
      </div>
      
      {/* <div className="flex flex-col gap-y-8 lg:flex-row lg:justify-between lg:gap-x-6 lg:gap-y-0 "> */}
      <div className="flex flex-wrap lg:flex-nowrap gap-y-8 justify-between gap-x-6 lg:overflow-auto">
        {children}
      </div>
    </div>
  );
};

CarouselCard.propTypes = {
    actions: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};
