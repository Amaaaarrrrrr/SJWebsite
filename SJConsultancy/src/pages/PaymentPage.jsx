import Payment from "../components/Payment";

const PaymentPage = () => {
  return (
    <section className="bg-lightGray py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-navyBlue mb-12">Complete Your Payment</h1>
        
        <Payment />
      </div>
    </section>
  );
};

export default PaymentPage;
