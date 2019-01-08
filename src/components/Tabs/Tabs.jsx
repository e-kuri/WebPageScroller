import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import PropTypes from 'prop-types';

const getTabList = tabs => (
    <TabList>
        {Object.keys(tabs).map(it => (
            <Tab>{it}</Tab>
        ))}
    </TabList>   
);

const getTabPanels = tabs => Object.keys(tabs).map(it => (
    <TabPanel>
        {tabs[it]}
    </TabPanel>
));

const TabViewer = props => {

    return(
        <Tabs>
            {getTabList(props.tabs)}
            {getTabPanels(props.tabs)}
        </Tabs>
    )

}

Tabs.propTypes = {
    tabs: PropTypes.object.isRequired
}

export default TabViewer;