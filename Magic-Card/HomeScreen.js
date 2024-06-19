import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, TouchableOpacity, TextInput } from 'react-native';
import JobCard from './JobCard';

const popularJobs = [
  { id: '1', title: 'Software Engineer    ', position: 'Full-time', salary: '$120,000', location: 'San Francisco, CA', icon: require('./assets/imagess/swe.png') },
  { id: '2', title: 'Data Scientist       ', position: 'Part-time', salary: '$100,000', location: 'New York, NY', icon: require('./assets/imagess/ds.png') },
  { id: '3', title: 'Inn                  ', position: 'chef', salary: '$110,000', location: 'Austin, TX', icon: require('./assets/images/food.png') },
  { id: '4', title: 'Burger King          ', position: 'Jr Executive', salary: '$90,000', location: 'Los Angeles, CA', icon: require('./assets/imagess/bk.png') },
  { id: '5', title: 'Backend Developer    ', position: 'Full-time', salary: '$130,000', location: 'Seattle, WA', icon: require('./assets/imagess/be.png') },
  { id: '6', title: 'StarBucks            ', position: 'Executive', salary: '$95,000', location: 'Chicago, IL', icon: require('./assets/imagess/SB.png') },
  { id: '7', title: 'Mobile Developer     ', position: 'Full-time', salary: '$105,000', location: 'Denver, CO', icon: require('./assets/imagess/MD.png') },
  { id: '8', title: 'Beats                ', position: 'Manager', salary: '$115,000', location: 'Boston, MA', icon: require('./assets/imagess/beats.png') },
];

const featuredJobs = [
  { id: '9', title: 'AI Specialist', company: 'Company H' },
  { id: '10', title: 'DevOps Engineer', company: 'Company I' },
  { id: '11', title: 'Cloud Architect', company: 'Company J' },
  { id: '12', title: 'Cybersecurity Analyst', company: 'Company K' },
  { id: '13', title: 'Blockchain Developer', company: 'Company L' },
  { id: '14', title: 'Game Developer', company: 'Company M' },
  { id: '15', title: 'Full Stack Developer', company: 'Company N' },
  { id: '16', title: 'Machine Learning Engineer', company: 'Company O' },
];

export default function HomeScreen({ route }){
  const { name, email } = route.params;
  const [showAllPopular, setShowAllPopular] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);

  const ell = require('./assets/images/Ellipse.png');

  const handleSearch = () => {
 const query = searchQuery.toLowerCase();
    const filtered = popularJobs.filter(job => job.title.toLowerCase().includes(query));
    setFilteredJobs(filtered);
  };

  const renderJobCard = ({ item }) => {
    const isHighlighted = filteredJobs.includes(item);
    return (
      <JobCard
        icon={item.icon}
        title={item.title}
        position={item.position}
        salary={item.salary}
        location={item.location}
        isPopular={true}
        isHighlighted={isHighlighted}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}><View style = {{marginRight:140}} ><Text style={styles.header}>Welcome, {name}!</Text>
      <Text style={styles.email}>{email}</Text></View>
      <Image source={ell}/></View>

      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search jobs..." 
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

    
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <JobCard title={item.title} company={item.company} isPopular={false} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
       
      />
       <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
         data={showAllPopular ? popularJobs : popularJobs.slice(0, 2)}
         renderItem={renderJobCard}
         keyExtractor={(item) => item.id}
      />
      {!showAllPopular && (
        <TouchableOpacity onPress={() => setShowAllPopular(true)} style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      )}

      {showAllPopular && (
              <TouchableOpacity onPress={() => setShowAllPopular(false)} style={styles.seeAllButton}>
                <Text style={styles.seeAllText}>Hide</Text>
              </TouchableOpacity>
       )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  seeAllButton: {
    alignItems: 'center',
    marginVertical: 16,
  },
  seeAllText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
