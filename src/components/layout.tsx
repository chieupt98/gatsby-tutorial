import { Link } from "gatsby"
import * as React from "react"
import useQueryCategories from "../hooks/use-query-category"
const Layout = (props :any) => { 
    const { allPrismicCategory } = useQueryCategories() 
    return (<>
        <header>
          <nav>
           <ul style={{ display: 'flex', gap: 100, justifyContent: 'center'}}>
             <li>
               <Link to="/">
               Home
               </Link>
             </li>
             {
               allPrismicCategory?.nodes?.map((category : any)=>(
                 <li key={category.uid}>
                   <Link to="/">{category.data.title.text}</Link>
                 </li>
               ))
             }
           </ul>
          </nav>
        </header>
        <main>
            {props.children}
        </main>
       </>
       )
}
export default Layout