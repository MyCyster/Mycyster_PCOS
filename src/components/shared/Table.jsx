import PropTypes from "prop-types";
import { Button } from "./Button";

export const Table = ({headerData, bodyData, emptyState}) => {

    const renderTableCell = (header, history) => {
        if (header.id === 'action') {
            return (
                <td key={header.id} className={`border border-gray-100 py-1 px-3 text-left ${header.style}`}>
                    <Button className="bg-transparent py-2 px-3 text-base">
                        {history[header.id]}
                    </Button>
                </td>
              );
        } else {
            return (
                <td
                  key={header.id}
                  className={`border border-gray-100 py-3 px-6 font-medium text-gray-500 text-left ${header.style}`}
                >
                  {history[header.id]}
                </td>
            );
        }
    };

    return (
        <>
            <table className="hidden lg:table table-auto w-full">
                <thead>
                    <tr className="border-x border-b border-gray-100 bg-[#FCFCFD]">
                        {headerData.map(header => (
                            <th key={header.id} className="py-3 px-6 font-medium text-gray-500 text-left">
                                {header.value}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        bodyData.length > 0 ?
                        <>{bodyData.map(history => (
                            <tr key={history.id} className="border border-gray-100">
                                {headerData.map(header => renderTableCell(header, history))}
                            </tr>
                        ))}</>
                        :
                        <tr>
                            <td colSpan="100%" className="text-center">
                                {emptyState}
                            </td>
                        </tr>

                    }
                </tbody>
            </table>

            {
                bodyData.length > 0 ? 
                <>
                    {bodyData.map(history => (
                    <>
                        <div key={history.id} className="block lg:hidden border rounded-xl m-4">
                            <div className="grid grid-cols-3 divide-x border-b">
                                <div className="text-center p-2 text-gray-500 capitalize">{history.mood}</div>
                                <div className="text-center p-2 text-gray-500">{history.date}</div>
                                <div className="text-center p-2 text-gray-500">{history.time}</div>
                            </div>
                            <div className="p-4 text-gray-500">
                                {history.note}
                            </div>
                        </div>  
                    </>
                    ))}
                </> 
                :
                <div className="block lg:hidden text-center">
                    {emptyState}
                </div>
            }

            
        </>
    )
}

Table.propTypes = {
    headerData: PropTypes.array.isRequired,
    bodyData: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    emptyState: PropTypes.node
};