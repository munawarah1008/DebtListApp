import { DebtAdd } from "../components/debtList/debt.add";
import { DebtList } from "../components/debtList/debt.list";
import { Nunito } from 'next/font/google';


const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
});

async function getDebtList() {
  try {
    const respon = await fetch(
      "https://v1.appbackend.io/v1/rows/SXsMhsVe0ljU",
      { next: { revalidate: 0 } },
    );
    const data = await respon.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Page() {
  const { data } = await getDebtList();

  return (
    <div className={nunito.className}>  {/* Apply the Nunito font class here */}
      <div>
        <DebtAdd />
      </div>
      <div className={nunito.className}>
      <div className="wrap-card" >
        {data?.map((debt) => (
          <DebtList
            key={debt._id}
            id={debt._id}  
            name={debt.name}
            amount={debt.amount} 
            payment_due_date={debt.payment_due_date} 
          />

        ))}
        </div>
      </div>
    </div>
  );
}
