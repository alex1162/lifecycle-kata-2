import Alert from "./Alert"
import {useState, useEffect} from "react";

const CustomerList = ({ customers, setHomeAlertVisible, setHomeAlertText }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setHomeAlertVisible(true);
    setHomeAlertText("Welcome to the Customer List");
    setTimeout(()=> {
      setHomeAlertVisible(false);
    }, 3000)
    return () => {
      setHomeAlertVisible(true);
      setHomeAlertText("Goodbye");
      setTimeout(()=> {
        setHomeAlertVisible(false);
      }, 3000)
    }
  }, []);



  useEffect(() => {
    if (customers.length > 0) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 2000)
    }
  }, [customers]);

  return (
      <>
        <Alert visible={isVisible} text={"customer added"}/>
        <ul className="customer-list">
            {
              customers.map(customer => {
                return (
                  <li key={customer.email}>
                    <strong>{customer.name}</strong><br/>
                    <span>Email: {customer.email}</span><br/>
                    <span>Phone: {customer.phone}</span><br/>
                    <span>Address: {customer.address}</span><br/>
                  </li>
                )
              })
            }
        </ul>
      </>
  );
};

export default CustomerList;