import { useMoralis } from "react-moralis";
import HeroSection from '../components/HeroSection';
import { useRouter } from "next/router";
import Layout from '../components/Layout';


const Home = () => {

  const { isAuthenticated} = useMoralis();

  const router = useRouter();

      if (isAuthenticated) {    
        router.push("/dashboard"); 
      }
         

  return (
    
    <Layout>
      <div className="pt-8">
      {!isAuthenticated && <HeroSection /> }
      </div>
    </Layout>
    
  )
}

export default Home

