import { useState } from "react";

interface OrderFormProps {
  onSubmit: (order: { name: string; cups: number }) => void;
}

function OrderForm({ onSubmit }: OrderFormProps) {
    const [name, setName] = useState<string>("Pizza");
    const [cups,setCups] = useState<number>(1);
  return <form onSubmit= {handleSubmit}>
    <label >Chai name</label>
    <input value ={name} onChange= {[(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)]} />
  </form>
}

export default OrderForm;