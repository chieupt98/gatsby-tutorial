import {graphql, Link } from "gatsby"; 
import * as React from "react";
import Layout from "../components/layout";
import useQueryPost from "../hooks/use-query-post"

const IndexPage = ({ data } : any) => {
  const { allPrismicPost } = useQueryPost() 
  return (<>
   <Layout>
     {
       allPrismicPost?.nodes?.map(({data} : any) => (
         <article key={data.title}>
           <div>{data.title.text} Triggered</div>
           <img width={300} src={data.image.url} alt={data.image.alt}></img>
         </article>
       ))
     }
   </Layout>
  </>
  )
} 

export default IndexPage