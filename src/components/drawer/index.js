import React from "react";
import { Text } from 'react-native';

import { Container, TextInput } from '../../components/drawer/styles';

export default function Drawer() {
	return(
		<Container>
			<TextInput
			placeholder="Search"
			placeholderTextColor="#fff"/>
		</Container>
	)
}