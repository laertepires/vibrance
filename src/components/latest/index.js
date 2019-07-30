import React from "react";
import { Container, ItemFeed, TopItem, ImageItem, ExcerptItem, InfoProfile, Interactions, InfoUser, InteractionsIcons, Bottom } from "./styles";
import { View, Text, ScrollView, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";


export default function Latest() {
	return(
		<Container>
			<ScrollView style={{ padding: 10}}>
				<ItemFeed>
					<TopItem>
						<InfoProfile>
							<Image style={{width: 50, height: 50}} source={require('../../assets/images/profile-photo.png')}/>
							<InfoUser>
								<Text>Ami Koehler</Text>
								<Text style={{ color: '#f50000' }}>@dropperidit</Text>
							</InfoUser>
						</InfoProfile>
						<Interactions>
							<Text>just now</Text>
							<Bottom>
								<InteractionsIcons><Icon name="favorite-border" size={25}  color="#f50000"/><Text style={{ fontSize: 20, marginLeft: 10}}>23</Text></InteractionsIcons>
								<InteractionsIcons><Icon name="chat-bubble-outline" size={25} color="#3b3b3b"/><Text style={{ fontSize: 20,  marginLeft: 10}}>5</Text></InteractionsIcons>
							</Bottom>
						</Interactions>
					</TopItem>
					<ImageItem>
						<Image style={{width: '100%' , height: 120}} source={require('../../assets/images/default.jpg')}/>
					</ImageItem>
					<ExcerptItem>
						<Text style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere, justo id pulvinar fringilla, nulla nunc malesuada eros, nec consequat diam ligula ac dui.</Text>
					</ExcerptItem>
				</ItemFeed>

			</ScrollView>
		</Container>
	)
}