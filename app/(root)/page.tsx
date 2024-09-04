import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const  Home    = () => { 
  const loggedIn = {firstName: 'Francisco', lastName: 'Cruz', email: 'onbank@gmail.com'};
  return ( 
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transaction effeciently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={[1]}
            totalCurrentBalance={1250.50}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:1250.50}, {currentBalance:850.50}]}
      />
    </section>
  )
}

export default  Home