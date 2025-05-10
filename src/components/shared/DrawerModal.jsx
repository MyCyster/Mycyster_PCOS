import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from "prop-types";

export const DrawerModal = ({ isOpen, onClose, title, subtitle, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white w-full sm:w-1/3 h-full p-4 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p>{subtitle}</p>
                </div>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

DrawerModal.propTypes = {
    isOpen: PropTypes.string.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
};