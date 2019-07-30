import React from "react";
import { Container } from './styles';
import { Button, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header() {
	return(
		<Container>
			<Icon name="dehaze" size={30}  color="#fff"/>
			<Text style={{ color: '#fff', fontSize: 18 }}>My Discoveries</Text>
			<Icon name="public" size={30}  color="#fff"/>
		</Container>
	)
}