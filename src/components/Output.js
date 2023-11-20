export default function Output({ bill, tip, totalBill }) {
  return (
    <h3 style={bill > 0 ? {} : { display: "none" }}>
      You'll pay ${totalBill} (${bill} + ${tip} tip)
    </h3>
  );
}
