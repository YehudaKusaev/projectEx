'use client';

import { Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

export default function InputElementWithIconOnTheLeftSide() {
  return (
    <div className="max-w-md">
      <div className="block mb-2">
        <Label
          htmlFor="email4"
          value="Ваш E-mail:"
        />
      </div>
      <TextInput
        icon={HiMail}
        id="email4"
        placeholder="name@flowbite.com"
        required
        type="email"
      />
    </div>
  )
}


