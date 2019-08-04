import styled from "styled-components/native";
import img from '../../assets/images/photo.jpg';

export const Container = styled.View`
    flex: 1;
    padding: 15px;
`;

export const TextInput = styled.TextInput`
    height: 40;
    borderWidth: 1;
    borderRadius: 50;
    borderColor: #1e2033;
    backgroundColor: #1e2033;
    color: #fff;
    padding: 10px;
    width: 85%;
`;

export const Search = styled.View`
    width: 100%;
    justifyContent: space-between;
    flex-direction: row;
    alignItems: center;
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
    position: relative;
    margin: 30px;
    borderRadius: 10px;
`;

export const Photo = styled.View`
    width: 100%; 
    alignItems: center;
`;

export const Name = styled.Text`
    color: #67cbff;
    fontSize: 22;
    textAlign: center;
    padding: 0 0 20px 0;
`;

export const Item = styled.TouchableOpacity`
    alignItems: center;
    flexDirection: row;
    padding: 10px 0px;
`;

export const Text = styled.Text`
    fontSize: 17px;
    padding: 0 0 0 20px;
    color: #fff;
    fontFamily: 'Darker Grotesque';
`;