import PropTypes from "prop-types";

export const CarouselCard = ({children, actions, className, title, subtitle, border = false}) => {
  return (
    <div className={`w-full rounded-xl px-4 pb-4 ${border ? 'border border-[#939090]' : ''} ${className}`}>
      <div className={`flex justify-between items-center py-1 ${!border ? 'mb-4': ''}`}>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p>{subtitle}</p>
        </div>
        {actions}
      </div>

      {border && <hr className="border border-b-[#939090] mb-4 -mx-4"/>}
      
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
    subtitle: PropTypes.string,
    border: PropTypes.bool
};
