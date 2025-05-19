import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import empolyee from "../../assets/images/employeer.jpg";
import img from "../../assets/images/employeer2.jpg";
import Order from "./Order";

const Employer = () => {
  const navigate = useNavigate();
  return (
    <>
    <Order/>
    </>
    // <> 
      
    //   <Box
    //     sx={{
    //       position: "relative",
    //       width: "100wv",
    //       height: "450px",
    //       mt: 10,
    //       backgroundImage: `url(${empolyee})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       padding: "5px",
    //       color: "white",
    //     }}
    //   >
    //     {/* <Breadcrumbs sx={{ color: "white" }}>
    //       <Link underline="hover" color="inherit" href="/">
    //         Home
    //       </Link>
    //       <Typography color="white">Contact Us</Typography>
    //     </Breadcrumbs> */}
    //     <Typography
    //       variant="h3"
    //       fontWeight="bold"
    //       sx={{
    //         fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
    //         textAlign: "center",
    //       }}
    //     >
    //       INNOVATIVE TALENT ACQUISITION SOLUTION
    //     </Typography>

    //     <Typography variant="body2" mt={5}>
    //       To help your company recruit the best candidates.
    //     </Typography>
    //   </Box>
    //   <Box
    //     sx={{
    //       textAlign: "center",
    //       mt: 2,
    //       px: { xs: 2, sm: 4, md: 10, lg: 15 },
    //     }}
    //   >
    //     <Typography variant="h3" fontWeight="bold">
    //       Recruitment Solution
    //     </Typography>
    //     <Typography variant="subtitle2" mt={8}>
    //       Recruitment Process Outsourcing (RPO) an IT Enables Service (ITES) is
    //       a form of business process outsourcing (BPO) where an employer
    //       transfers all or part of its recruitment processes to another
    //       business. We extend RPO services for permanent as well as contractual
    //       staffing. We manage the entire recruiting/hiring process from job
    //       profiling through the on boarding of the new hire, including staff,
    //       technology, method and reporting. We may if need be adopt the client
    //       company's technology, methodologies and reporting Spirale HR Solutions
    //       Pvt.Ltd.(Formerly Spirale india solutions) RPO solution differs
    //       greatly from all our other Recruitment services in that RPO assumes
    //       ownership of the design, management and control of the recruitment
    //       process and the responsibility of results.
    //     </Typography>
    //   </Box>
    //   <Box
    //     sx={{
    //       width: "100%",
    //       height: { xs: "auto", md: "150px" },
    //       bgcolor: "#FFC107",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       mt: 5,
    //       textAlign: "center",
    //     }}
    //   >
    //     <Typography variant="h3">WHY CHOOSE SHSPL?</Typography>
    //   </Box>

    //   <Box sx={{ my: 8, px: { xs: 2, sm: 4, md: 10, lg: 15 } }}>
    //     <Grid container spacing={5} alignItems="center">
    //       <Grid item xs={12} md={4}>
    //         <img src={img} alt="employee" style={{ width: "100%" }} />
    //       </Grid>

    //       <Grid item xs={12} md={8}>
    //         <ul style={{ paddingLeft: "1rem" }}>
    //           {[
    //             "We're Recruitment experts with Global service delivery capability.",
    //             "Building meaningful careers for Jobseekers with organizations we help succeed.",
    //             "Serving MNCs , Large corporates, Medium and Small enterprises.",
    //             "Unmatched Speed, flexibility, transparency and excellent service.",
    //             "Access to resume database of over 2 Million high potential candidates.",
    //             "Using cutting edge E Recruitment technologies.",
    //             "Single Search To High Volume Sourcing.",
    //           ].map((item, index) => (
    //             <li key={index}>
    //               <Typography variant="body1" color="#383838">
    //                 {item}
    //               </Typography>
    //             </li>
    //           ))}
    //         </ul>
    //       </Grid>
    //     </Grid>
    //   </Box>
    //   <Box
    //     sx={{
    //       width: "100%",
    //       height: { xs: "auto", md: "150px" },
    //       bgcolor: "#002e5b",
    //       color: "white",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       mt: 5,
    //       textAlign: "center",
    //     }}
    //   >
    //     <Typography variant="h3">HOW WE WORK</Typography>
    //   </Box>
    //   <Container sx={{ textAlign: "center", mt: 5 }}>
    //     <Typography sx={{ color: "#777777" }}>
    //       Our entire business revolves around a simple belief: Our People Are
    //       Everything. If you’re looking to find great talent for your business,
    //       here’s how we work together.
    //     </Typography>

    //     <Typography mt={5} variant="h5">
    //       Market Analytics
    //     </Typography>
    //     <Typography mt={5} sx={{ color: "#777777" }}>
    //       Regardless of whether you have a requirement, we will keep in regular
    //       contact to share market insights and updates so we can better partner
    //       with you and support your company’s goals. We conduct numerous market
    //       studies and surveys, invest in labour market research, and build
    //       proprietary tools our recruitment consultants can use to share local
    //       labour trends with our customers.
    //     </Typography>
    //     <Typography mt={5} variant="h5">
    //       Client Knowledge
    //     </Typography>
    //     <Typography mt={5} sx={{ color: "#777777" }}>
    //       We take the time to understand your business, industry, talent
    //       management needs and the requirements of each specific job brief. We
    //       do this formally through our regular client and candidate research
    //       program, and informally through our meetings and direct discussions
    //       with you. Client knowledge is also balanced with the time we invest to
    //       understand the candidates skills, goals and interests, so we can
    //       secure the right people for your organisation.
    //     </Typography>

    //     <Typography mt={5} variant="h5">
    //       Sourcing Strategy
    //     </Typography>
    //     <Typography mt={5} sx={{ color: "#777777" }}>
    //       Through our Voice of the Customer (VOC) survey, we know that the
    //       ability to attract and retain quality talent is one of the most highly
    //       valued outcomes clients want from their recruitment partner. Sourcing
    //       great talent is no accident. It’s made possible through strong
    //       relationships and networks, so we maintain on-going relationships with
    //       candidates throughout their career. This allows us to build networks
    //       of engaged and pre-qualified candidates ready to meet your business
    //       needs.
    //     </Typography>
    //     <Typography mt={5} variant="h5">
    //       Screening & Selection
    //     </Typography>
    //     <Typography mt={5} sx={{ color: "#777777" }}>
    //       We ensure that all candidates are thoroughly pre-screened before they
    //       meet you. Our method is to test first, present second. Your time and
    //       business are valuable, so we only want to introduce you to the people
    //       who are the right cultural and technical fit.
    //     </Typography>

    //     <Typography mt={5} variant="h5">
    //       Strategic Partnership
    //     </Typography>
    //     <Typography mt={5} sx={{ color: "#777777" }}>
    //       Clients want recruiters who understand their business and culture, act
    //       as their trusted advisor and provide market intelligence that assists
    //       with workforce planning. In order to be your trusted advisor, our
    //       partnership model is based on mutual respect, kept promises, and an
    //       ability to listen, understand and nurture long term, quality
    //       relationships. With regular consultation we not only anticipate and
    //       support your workforce needs but also provide you the latest market
    //       intelligence as it occurs. Working closely together guarantees our
    //       work delivers and exceeds your expectations.
    //     </Typography>
    //     <Typography mt={5} variant="h5">
    //       Tell us how we can help - and we will.
    //     </Typography>

    //     <Button
    //       variant="outlined"
    //       sx={{
    //         mt: 3,
    //         color: "black",
    //         border: "3px solid #b24c75",
    //         borderRadius: "0px",
    //       }}
    //       onClick={() => navigate("/contact")}
    //     >
    //       Contact Us
    //     </Button>
    //   </Container>

    //   <Box
    //     sx={{
    //       width: "100%",
    //       height: { xs: "auto", md: "75px" }, // Auto height for smaller screens
    //       bgcolor: "#FFC107",
    //       mt: 5,
    //       display: "flex",
    //       alignItems: "center",
    //       paddingY: { xs: 2, md: 0 }, // Add padding for smaller screens
    //     }}
    //   >
    //     <Container
    //       sx={{
    //         display: "flex",
    //         flexDirection: { xs: "column", sm: "row" }, // Stack items on small screens
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         textAlign: { xs: "center", sm: "left" }, // Center text for small screens
    //       }}
    //     >
    //       <Typography
    //         variant="h6"
    //         fontWeight="bold"
    //         sx={{ fontSize: { xs: "16px", sm: "20px", md: "24px" } }} // Responsive font size
    //       >
    //         Looking for a First-Class Career Consultant?
    //       </Typography>

    //       <Button
    //         variant="contained"
    //         size="large"
    //         sx={{
    //           fontWeight: "bold",
    //           bgcolor: "#002e5b",
    //           borderRadius: "0px",
    //           marginTop: { xs: 2, sm: 0 }, // Add margin on small screens
    //           "&:hover": {
    //             color: "#002e5b",
    //             bgcolor: "#FFC107",
    //             border: "2px solid white",
    //           },
    //         }}
    //       >
    //         Get a Quote
    //       </Button>
    //     </Container>
    //   </Box>
     
    // </>
  );
};

export default Employer;
