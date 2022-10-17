import { gql } from "@apollo/client";

export const DELETE_ARCHITECT = gql`
  mutation DELETE_ARCH($id: Int!) {
    deleteArchitectProfile(id: $id) {
      id
    }
  }
`;

export const CREATE_ARCHITECTPROFILE = gql`
  mutation CREATE_ARCHITECTPROFILE(
    $firstName: String!
    $lastName: String!
    $email: String!
    $mobile: String!
    $description: String
    $category: String
    $profileImage: String
    $resumeUrl: String
    $projectTitle: String
    $projectImage: String
    $charge: String
    $projectTitle1: String
    $projectImage1: String
    $projectTitle2: String
    $projectImage2: String
    $projectTitle3: String
    $projectImage3: String
    $projectTitle4: String
    $projectImage4: String
    $projectTitle5: String
    $projectImage5: String
    $projectTitle6: String
    $projectImage6: String
    $projectTitle7: String
    $projectImage7: String
    $projectTitle8: String
    $projectImage8: String
    $projectTitle9: String
    $projectImage9: String
  ) {
    createArchitectProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      mobile: $mobile
      description: $description
      category: $category
      profileImage: $profileImage
      resumeUrl: $resumeUrl
      projectTitle: $projectTitle
      projectImage: $projectImage
      projectTitle1: $projectTitle1
      projectImage1: $projectImage1
      projectTitle2: $projectTitle2
      projectImage2: $projectImage2
      projectTitle3: $projectTitle3
      projectImage3: $projectImage3
      projectTitle4: $projectTitle4
      projectImage4: $projectImage4
      projectTitle5: $projectTitle5
      projectImage5: $projectImage5
      projectTitle6: $projectTitle6
      projectImage6: $projectImage6
      projectTitle7: $projectTitle7
      projectImage7: $projectImage7
      projectTitle8: $projectTitle8
      projectImage8: $projectImage8
      projectTitle9: $projectTitle9
      projectImage9: $projectImage9
      charge: $charge
    ) {
      id
      firstName
      lastName
      email
      mobile
      category
      profileImage
      resumeUrl
      projectTitle
      projectImage
      aboutMe
      projectImage1
      projectTitle1
      projectImage2
      projectTitle2
      projectImage3
      projectTitle3
      projectImage4
      projectTitle4
      projectImage5
      projectTitle5
      projectImage6
      projectTitle6
      projectImage7
      projectTitle7
      projectImage8
      projectTitle8
      projectImage9
      projectTitle9
      reviews {
        id
        profileId
        authorId
        text
        status
        likes
      }
      charge
      createdAt
      updatedAt
      isDeleted
    }
  }
`;


export const UPDATE_ARCHITECTPROFILE = gql`
  mutation UPDATE_ARCHITECTPROFILE(
    $firstName: String
    $lastName: String
    $mobile: String
    $email: String!
    $profileImage: String
    $resumeUrl: String
    $projectTitle: String
    $projectImage: String
    $aboutMe: String
    $charge: String
    $isDeleted: Boolean
  ) {
    updateArchitectProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      mobile: $mobile
      profileImage: $profileImage
      resumeUrl: $resumeUrl
      projectTitle: $projectTitle
      projectImage: $projectImage
      charge: $charge
      aboutMe: $aboutMe
      isDeleted: $isDeleted
    ) {
      id
      firstName
      lastName
      email
      mobile
      category
      profileImage
      resumeUrl
      projectTitle
      projectImage
      aboutMe
      projects {
        title
        imageUrl
      }
      reviews {
        id
        profileId
        authorId
        text
        status
        likes
      }
      charge
      createdAt
      updatedAt
      isDeleted
    }
  }
`;
