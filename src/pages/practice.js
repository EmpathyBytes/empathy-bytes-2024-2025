import React from "react";
import Layout from "../components/layout";
import "../styles/practicePage.css";
import JoshCard from "../components/joshCard";

// TODO 2.0: Import your card component below using the same syntax as the JoshCard import



function PracticePage() {

  return (
    <Layout>
      <div className="cardWrapper">
        <main>
          <div className="cards">
            <JoshCard />

            {/* TODO 3.0: Add your card component below using the same syntax as the JoshCard component */}


          </div>
        </main>
      </div>
    </Layout>
  );
}

export default PracticePage;
