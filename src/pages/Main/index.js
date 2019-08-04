import React, { useState } from 'react';
import { Container } from './styles';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { DrawerLayout} from 'react-native-gesture-handler';


import Latest from '../../components/latest';
import Favorites from '../../components/favorites';
import All from '../../components/all';
import Header from '../../components/header';
import Drawer from '../../components/drawer';


const LatestRoute = () => ( <Latest /> );
const FavoritesRoute = () => ( <Favorites/> );
const AllRoute = () => ( <All/> );
const navigationView = ( { param } ) => ( <Drawer onPress={ param }/> );


export default function Main( ) {

  const initialState = {
    index: 0,
    routes: [
      { key: 'latest', title: 'Latest' },
      { key: 'favorites', title: 'Favorites' },
      { key: 'all', title: 'All' },
    ],
  };

  const [ state, setState ] = useState(initialState);

  const selectTab = (index) => {

    this.initialState = {
      index: index,
      routes: [
        { key: 'latest', title: 'Latest' },
        { key: 'favorites', title: 'Favorites' },
        { key: 'all', title: 'All' },
      ],
    };
    return setState(this.initialState);
  }

  return (
    
    <Container>
      <DrawerLayout
        drawerWidth={350}
        drawerPosition={DrawerLayout.positions.Left}
        drawerType='slide'
        drawerBackgroundColor="#292b44"
        renderNavigationView={navigationView}
        ref={drawer => { this.drawer = drawer }}>
  
        <Header onOpenDrawer={() => this.drawer.openDrawer()}/>

        <TabView
          navigationState={state}
          renderScene={SceneMap({  latest: LatestRoute,  favorites: FavoritesRoute, all: AllRoute  })}
          onIndexChange={ (index) => selectTab(index) }
          initialLayout={{ width: Dimensions.get('window').width, height : Dimensions.get('window').height }}
        />
      </DrawerLayout>      
    </Container>
  );
}