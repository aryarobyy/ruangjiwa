import { Toaster } from "react-hot-toast"

const BaseToaster = ({ className, gap = 8 }) => {
    return (
        <>
        <Toaster
              position={"top-right"}
              reverseOrder={false}
              gutter={gap}
              containerClassName={className}
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: "",
                duration: 5000,
                style: {
                  background: "#363636",
                  color: "#fff",
                },
              }}
            />
        </>
    )
};

export default BaseToaster;