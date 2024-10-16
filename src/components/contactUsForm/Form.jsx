import React, { useState } from 'react';

import Input from '../../ui/input/Input';

import { ValidationError } from '@formspree/react';
import { useSubmitFormData } from '../../hooks/useSubmitFormData';

const Form = () => {
  const [state, handleSubmit] = useSubmitFormData();

  if (state.submitting) {
    return <p className="text-2xl">Submitting...</p>;
  }

  if (state.succeeded) {
    return (
      <p className="text-2xl text-[#54c036]">
        Thank you, <br />
        for submitting your data. <br />{' '}
        <span>We will reach out to you soon.</span>
      </p>
    );
  }

  return (
    <form className="sm:pr-8" onSubmit={handleSubmit}>
      <div className="sm:flex">
        <label className="block">
          <span className="flex">First name</span>
          <ValidationError
            prefix="First name"
            field="firstName"
            errors={state.errors}
          />
          <Input type="text" placeholder="First name" name="firstName" />
        </label>

        <label className="sm:ml-3">
          <span className="flex">Last name</span>
          <ValidationError
            prefix="Last name"
            field="lastName"
            errors={state.errors}
          />

          <Input type="text" placeholder="Last name" required name="lastName" />
        </label>
      </div>

      <div className="sm:flex">
        <label className="">
          <span className="flex">10-digit phone</span>
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <Input
            type="text"
            placeholder="10 digits"
            required
            name="phone"
            maxLength="10"
          />
        </label>

        <label className="sm:ml-3">
          <span className="flex">Email</span>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Input
            type="text"
            placeholder="Email"
            required
            name="email"
            pattern=".+@.+\..+"
          />
        </label>
      </div>

      {/* <hr className="xs:max-w-[325px] sm:w-[660px] mb-4" /> */}
      {/* full width adress input */}
      <div className="">
        <label>
          <span className="flex">Address</span>
          <ValidationError
            prefix="Address"
            field="address"
            errors={state.errors}
          />

          <Input
            type="text"
            placeholder="Address"
            required
            name="address"
            long="true"
            // {...register('adress', { required: true, minLength: 10 })}
          />
        </label>
      </div>

      <div className="sm:flex">
        <label>
          <span className="flex">City</span>
          <ValidationError prefix="City" field="city" errors={state.errors} />

          <Input type="text" placeholder="City" required name="city" />
        </label>
        <label className="sm:ml-3">
          <span className="flex">ZIP Code</span>
          <ValidationError
            prefix="ZIP code"
            field="zipcode"
            errors={state.errors}
          />

          <Input type="text" placeholder="ZIP Code" required name="zipcode" />
        </label>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#54c036] py-3 transition duration-300 px-6 rounded-md hover:text-black text-white"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
