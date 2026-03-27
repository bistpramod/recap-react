import { useState } from "react";

interface OrderFormProps {
  onSubmit: (order: { name: string; cups: number }) => void;
}

function OrderForm({ onSubmit }: OrderFormProps) {
  return <div>OrderForm</div>;
}

export default OrderForm;