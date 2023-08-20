'use client'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import TopHeader from "@/components/header-top";
import Header from "@/components/header";
import Functionionalities from "@/components/functionalities";
import Commentry from "@/components/text";
import Activities from "@/components/activities";
import Getstarted from "@/components/getStarted";
import PricingPage from "@/components/pricingPage";
import Operation from "@/components/operations";
import UsersQuestions from "@/components/usersQuestions";
import Subscribe from "@/components/subscribe";
import Footer from "@/components/footer";
function  CustomerViewPage() {
  
  return (
    <div>
      <TopHeader />
      <Header />
      <Functionionalities />
      <Commentry />
      <Activities />
      <Getstarted />
      <PricingPage />
      <Operation />
      <UsersQuestions />
      <Subscribe />
      <Getstarted />
    <Footer /> 
    </div>
  );
}
export default CustomerViewPage;
