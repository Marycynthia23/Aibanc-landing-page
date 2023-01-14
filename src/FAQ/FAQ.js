import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faqsection">
      <h3 className="faqheadline">Frequently Asked Questions</h3>
      <div
        className="test"
        style={{
          margin: "auto",
          width: "90%",
        }}
      >
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontSize: "25px",
                fontWeight: "600",
                lineHeight: "31px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "20px 0px",
              }}
            >
              Why request my BVN?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "40px",
                color: "#5B5971",
              }}
            >
              The regulators require the BVN to know your Customer (KYC) to
              access our credit tool.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          style={{
            border: "0",
            borderBottomWidth: "0",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "23px",
                fontWeight: "600",
                lineHeight: "31px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "20px 0px",
              }}
            >
              How can I get my banks statement?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "40px",
                color: "#5B5971",
              }}
            >
              You can get your bank statement through your bank's mobile
              application or by requesting one from a local branch near you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "23px",
                fontWeight: "600",
                lineHeight: "31px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "20px 0px",
              }}
            >
              Unable to sign in, BVN registered to another user?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "40px",
                color: "#5B5971",
              }}
            >
              This is possible if you have created an account in the past. To
              find out if this is the case, please contact{" "}
              <a
                href="mailto:support@aibanc.co"
                style={{ textDecoration: "none" }}
              >
                support@aibanc.co
              </a>{" "}
              via email.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "23px",
                fontWeight: "600",
                lineHeight: "31px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "20px 0px",
              }}
            >
              What should I do if I need more help?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "40px",
                color: "#5B5971",
              }}
            >
              Kinly contact{" "}
              <a
                href="mailto:support@aibanc.co"
                style={{ textDecoration: "none" }}
              >
                support@aibanc.co
              </a>{" "}
              via email for further inquires.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
