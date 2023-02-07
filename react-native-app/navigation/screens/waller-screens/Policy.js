import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Text, Card } from "react-native-paper";
import { ThemedButton } from "react-native-really-awesome-button";
import { styles, WINDOW_WIDTH, WINDOW_HEIGHT } from '../../../styles/Styles';

const buttonWidth = WINDOW_WIDTH / 2.37;
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const LeftContent = (props) => <Image style={{width: '100%', height: '100%', borderRadius: 100}} source={{uri: "https://i.pravatar.cc/"}} />

function convertDate(date_str) {
  const temp_date = date_str.split("-");
  return (
    temp_date[0] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[2]
  );
}

function noThanks() {}

function illHelp() {}

export default function Event({ policy }) {
  let picurl = "https://picsum.photos/" + Math.floor(Math.random() * 1000);
  
  return (
    <Card mode="contained" style={styles.card}>
      <Card.Title
        title={policy.insurer}
        subtitle={convertDate(policy.end_date)}
        left={LeftContent}
      />
      <Card.Content>
        <Text variant="titleMedium">{policy.type + " insurance"}</Text>
        <Text variant="bodySmall">{policy.coverage}</Text>
      </Card.Content>
      <Card.Cover style={styles.cardPicture} source={{ uri: picurl }} />
      <Card.Actions style={styles.buttonContainer}>
        <ThemedButton
            name="bruce"
            type="primary"
            width={buttonWidth}
            borderColor="#495371"
            backgroundColor="#495371"
            backgroundDarker="#5b668c"
            >
            No Thanks.
        </ThemedButton>

        <ThemedButton
            name="bruce"
            type="secondary"
            width={buttonWidth}
            borderColor="#F1E0AC"
            backgroundColor="#F1E0AC"
            backgroundDarker="#98B4AA"
            backgroundShadow="#b8ccc5"
            >
            Renew my policy!
        </ThemedButton>
      </Card.Actions>
    </Card>
  );
}