import Link from 'next/link';
import '../../../app/globals.css';

interface CoinPageProps {
  params: { name: string };
}

export default function CoinPage({ params }: CoinPageProps) {
  const coinName = params.name.toUpperCase();
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center pt-40 w-full tf-container'>
      <h1 className='mb-3' style={{ color: 'lime', fontSize: '48px' }}>
        25.00$
      </h1>
      <p style={{ color: 'white', fontSize: '20px', marginBottom: '20px' }}>
        Live {coinName} Price
      </p>
      <div className='w-full flex items-center justify-center'>
        <div
          style={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}
        >
          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=COINBASE%3ABTCUSD&interval=60&theme=dark"
            width="100%"
            height="400"
            style={{
              border: 'none',
              borderRadius: '8px',
              display: 'block'
            }}
            title="Bitcoin Price Chart"
          />
        </div>
      </div>
      <ul className="my-16 flex flex-row m--16 gap-[16px]">
        <li>
          <Link
            href={`/choose-payment`}
            className="tf-list-item d-flex flex-column gap-[12px] align-items-center border p-2 rounded-lg w-[68px] h-[68px]"
          >
            <span className="w-[24px] h-[24px] bg-surface d-flex justify-content-center align-items-center">
              <i className="icon icon-way" />
            </span>
            Send
          </Link>
        </li>
        <li>
          <Link
            href={`/qr-code2`}
            className="tf-list-item d-flex flex-column gap-[12px] align-items-center border p-2 rounded-lg w-[68px] h-[68px]"
          >
            <span className="w-[24px] h-[24px] bg-surface d-flex justify-content-center align-items-center">
              <i className="icon icon-way2" />
            </span>
            Receive
          </Link>
        </li>
        <li>
          <Link
            href={`/buy`}
            className="tf-list-item d-flex flex-column gap-[12px] align-items-center border p-2 rounded-lg w-[68px] h-[68px]" 
          >
            <span className="w-[24px] h-[24px] bg-surface d-flex justify-content-center align-items-center">
              <i className="icon icon-wallet" />
            </span>
            Buy
          </Link>
        </li>
        <li>
          <Link
            href={`/swap`}
            className="tf-list-item d-flex flex-column gap-[12px] align-items-center border p-2 rounded-lg w-[68px] h-[68px]"
          >
            <span className="w-[24px] h-[24px] bg-surface d-flex justify-content-center align-items-center">
              <i className="icon icon-exchange" />
            </span>
            Swap
          </Link>
        </li>
      </ul>
    </div>
  );
}