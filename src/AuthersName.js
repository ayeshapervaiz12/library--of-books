import React from 'react'
import "./AuthersNames.css"
 
const Authers=[
{
authers: "https://www.amazon.com/Elin-Hilderbrand/e/B001IGQLTO/ref=s9_acss_bw_cg_CFQ322_2d1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
authersName: "Elin HilderBrand",
},
{
authers: "https://www.amazon.com/Tiffany-D-Jackson/e/B01LCDGQ0Q/ref=s9_acss_bw_cg_CFQ322_2a1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
authersName: "Tiffany D. Jackson",

},
{
  authers: "https://www.amazon.com/gp/product/B07ZTQ5PY9/ref=s9_acss_bw_cg_CFQ322_3a1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
  authersName: "Garfield",

},
{
  authers: "https://www.amazon.com/Chris-Bohjalian/e/B001H9VY80/ref=s9_acss_bw_cg_CFQ322_3b1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
  authersName: "Chris Bohjalian",

},
{
  authers: "https://www.amazon.com/George-R-R-Martin/e/B000APIGH4/ref=s9_acss_bw_cg_CFQ322_3c1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
  authersName: "George R. R. Martin",

},
{
  authers: "https://www.amazon.com/E-Lockhart/e/B001IOF7SC/ref=s9_acss_bw_cg_CFQ322_3d1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
  authersName: "John Grisham",

},
{
     authers: "https://www.amazon.com/Karen-M-McManus/e/B01M4HOSP5/ref=s9_acss_bw_cg_CFQ322_5a1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
    authersName: "Karen M. McManus",

},

{
  authers: "https://www.amazon.com/The-Moth/e/B09JTRRDZ6/ref=s9_acss_bw_cg_CFQ322_5b1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
  authersName: "Lord of the Rings ",
},

{
  authers: "https://www.amazon.com/Melissa-de-la-Cruz/e/B001IQXPY8/ref=s9_acss_bw_cg_CFQ322_5d1_w?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-15&pf_rd_r=VP6FT1NKVQWQKA39QF8Y&pf_rd_t=101&pf_rd_p=80541dfc-d2f4-41d4-920b-16cf99accbe9&pf_rd_i=283155",
  authersName: "Melissa de la Cruz ",

},


]

const AuthersName = () => {
  return (
    <div className='authersname'>


{Authers.map((names) => {
                return <Names random={names} />
            })}

    </div>
    
  )
}
const Names = (props) => {
    
    const {authers,authersName} = props.random
    return (
        <div className='Names'>
          
            <a href={authers} >Read More</a>
            
            {props.children}
            <h5>{authersName}</h5>
        </div>
    )
}

export default AuthersName