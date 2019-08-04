import React from "react";

import { Container, TextInput, Search, Photo, Image, Name, Item, Text } from '../../components/drawer/styles';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Drawer() {
	return(
		<Container>
			<Search>
				<TextInput
					placeholder="Search"
					placeholderTextColor="#fff"/>

				<Icon name="settings" size={25}  color="#4c5082"/>
			</Search>

			<Photo>
				<Image source={require('../../assets/images/photo.jpg')} ></Image>
			</Photo>

			<Name>Twanda Keaton</Name>

			<Item><Icon name="public" size={25}  color="#FFF"/><Text>Worldwide</Text></Item>
			<Item><Icon name="whatshot" size={25}  color="#FFF"/><Text>Trending</Text></Item>
			<Item><Icon name="place" size={25}  color="#FFF"/><Text>Places</Text></Item>
			<Item><Icon name="person" size={25}  color="#FFF"/><Text>People</Text></Item>
			<Item><Icon name="notifications" size={25}  color="#FFF"/><Text>Notifications</Text></Item>

		</Container>
	)
}