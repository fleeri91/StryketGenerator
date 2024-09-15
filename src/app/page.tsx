import CheckButton from '@/components/CheckButton'
import CheckRow from '@/components/CheckRow'
import CouponForm from '@/components/CouponForm'
import { Coupon } from '@/types/Coupon'

const CouponFormState: Coupon = {
  rows: [
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
    { '1': false, X: false, '2': false },
  ],
}

const App = () => {
  return (
    <div className="mx-auto flex max-w-screen-sm items-center justify-center">
      <CouponForm>
        {CouponFormState.rows.map((row, index) => (
          <CheckRow key={index}>
            <CheckButton label="1" checked={row['1']} />
            <CheckButton label="X" checked={row['X']} />
            <CheckButton label="2" checked={row['2']} />
          </CheckRow>
        ))}
      </CouponForm>
    </div>
  )
}

export default App
