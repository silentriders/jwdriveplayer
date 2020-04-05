import React from 'react';
import { BannerMovieContainers, ListContinueWatching, Recommended, TabsMovie } from '../../Containers';
import PropTypes from 'prop-types';

const HomePageComponent = (props) => {
    const { dataBanner } = props;
    return (
        <div>
            <BannerMovieContainers data={dataBanner} />
            <ListContinueWatching />
            <Recommended />
            <TabsMovie />
        </div>
    );
};

export default HomePageComponent;

HomePageComponent.propTypes = {
    dataBanner: PropTypes.any.isRequired
};
