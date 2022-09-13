import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../styles/Tabs.module.css";
import SecondSection from "../secondSection/SecondSection";
import FirstSection from "../firstSection/FirstSection";
import DesignTab from "../designTab/DesignTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabColors = {
    0: "#071129",
    1: "#1da78f",
    2: "#8339bc",
    3: "blue",
    4: "#3b3e65",
    5: "#e69627",
    6: "#071129;",
    7: "#3067f1",
    8: "#e69627",
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>The Axisbits Blog</h1>

      <Box sx={{ width: "100%" }}>
        <div className={styles.scroll}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": { display: "none" },
                "& .Mui-selected": {
                  backgroundColor: tabColors[value],
                  borderRadius: 50,
                  color: "white !important",
                },
              }}
            >
              <Tab
                label=" All posts"
                {...a11yProps(0)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Design"
                {...a11yProps(1)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Healthcare"
                {...a11yProps(2)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Startups"
                {...a11yProps(3)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Mobile"
                {...a11yProps(4)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Cybersecurity"
                {...a11yProps(5)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Blockchain"
                {...a11yProps(6)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Healthcare"
                {...a11yProps(7)}
                sx={{
                  fontSize: "12px",
                }}
              />
              <Tab
                label="Ed-tech"
                {...a11yProps(8)}
                sx={{
                  fontSize: "12px",
                }}
              />
            </Tabs>
          </Box>
        </div>
        <TabPanel value={value} index={0}>
          <FirstSection />
          <SecondSection />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DesignTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <FirstSection />
          <SecondSection />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DesignTab />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <FirstSection />
          <SecondSection />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <DesignTab />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <FirstSection />
          <SecondSection />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <DesignTab />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <FirstSection />
          <SecondSection />
        </TabPanel>
      </Box>
    </div>
  );
}
