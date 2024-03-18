import React from "react";

const GetStarted = () => {
  const steps = [
    {
      title: "Step 1: Create an Account",
      rule: "Sign up for an account on our website. Provide necessary information such as your name, email address, and password.",
    },
    {
      title: "Step 2: Choose Account Type",
      rule: "Select whether you want to create a buyer account or a seller account during the signup process.",
    },
    {
      title: "Step 3: Complete Buyer Profile",
      rule: "If you chose to create a buyer account, complete your profile by adding any additional information such as shipping address and payment details.",
    },
    {
      title: "Step 4: Complete Seller Profile",
      rule: "If you chose to create a seller account, complete your profile by providing information such as your business name, contact information, and payment preferences.",
    },
    {
      title: "Step 5: Add Products (Seller Only)",
      rule: "Once your seller account is set up, you can start adding products to your store. Provide details such as product name, description, price, and images.",
    },
  ];

  return (
    <section className="GetStarted">
    <div className="flex justify-between flex-col gap-8">
        <div className="text-4xl font-semibold">
            Get started with us!
        </div>
    <div className="grid grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div className="flex flex-col justify-center items-center border p-8 rounded-lg bg-white text-background-color">
            <div className="flex flex-col">
              <div className="text-xl font-semibold text-text-color">
                <h4>{step.title}</h4>
              </div>
              <p>{step.rule}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default GetStarted;
