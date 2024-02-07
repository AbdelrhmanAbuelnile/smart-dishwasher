function OrderState({state}) {

  const stateColor = {
    "pending": "text-yellow-300 border border-yellow-300 ",
    "processing": "text-blue-300 border border-blue-300",
    "shipped": "text-green-300 border border-green-300",
    "delivered": "text-green-600 border border-green-600",
    "cancelled": "text-red-300 border border-red-300",
  }

  return (
    <span
      className={`p-1 text-center truncate ${stateColor[state]} w-1/6 rounded-md`}
    >{state}</span>
  )
}

export default OrderState