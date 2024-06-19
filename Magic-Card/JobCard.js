import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function JobCard({ icon, title, position, salary, location, company, isPopular, isHighlighted }) {
  return (
    <View style={[styles.card, isPopular ? styles.popularCard : styles.featuredCard, isHighlighted ? styles.highlightedCard : null]}>
      {icon && <Image source={icon} style={styles.icon} />}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        {position && <Text style={styles.position}>{position}</Text>}
        {salary && <Text style={styles.salary}>{salary}</Text>}
        {location && <Text style={styles.location}>{location}</Text>}
        {company && <Text style={styles.company}>{company}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularCard: {
    flexDirection: 'column',
  },
  featuredCard: {
    width: 300, // Adjust as needed for horizontal scrolling
  },
  highlightedCard: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 16,
    color: '#555',
  },
  salary: {
    fontSize: 16,
    color: '#555',
  },
  location: {
    fontSize: 16,
    color: '#555',
  },
  company: {
    fontSize: 16,
    color: '#555',
  },
});
