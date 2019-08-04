import React from "react";
import { Container } from './styles';
import { Button, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { RectButton } from 'react-native-gesture-handler';

export default function Header(props) {
	return(
		<Container>
			<RectButton onPress={() => props.onOpenDrawer(true)}>
				<Icon name="dehaze" size={30}  color="#fff"/>
			</RectButton>
			<Text style={{ color: '#fff', fontSize: 18 }}>My Discoveries</Text>
			<Icon name="public" size={30}  color="#fff"/>
		</Container>
	)
}