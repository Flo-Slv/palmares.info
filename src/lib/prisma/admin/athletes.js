import prisma from "@/lib/prisma/prismaClient";

export const addAthlete = async (data) => {
  try {
    const firstname = data.firstname.trim();
    const lastname = data.lastname.trim();
    const nickname = data.nickname.trim();
    const gender = data.gender.trim();
    const birthdate = data.birthdate;
    const birthplace = data.birthplace.trim();
    const sportId = data.sportId;
    const titles = data.titles;

    // Check if fields are not empty.
    if (firstname === "") return { error: "Firstname can not be empty !" };
    if (lastname === "") return { error: "Lastname can not be empty !" };
    if (gender === "") return { error: "Gender can not be empty !" };
    if (birthplace === "") return { error: "Birthplace can not be empty !" };
    if (sportId === "") return { error: "Sport ID can not be empty !" };

    const compoundUniqueAthleteInput = {
      firstname,
      lastname,
      birthdate,
      birthplace,
      gender,
    };

    // Check if athlete already exist.
    const existingAthlete = await prisma.athlete.findUnique({
      where: {
        firstname_lastname_birthdate_birthplace_gender:
          compoundUniqueAthleteInput,
      },
    });

    if (existingAthlete) return { error: "Athlete already created !" };

    const sport = await prisma.sport.findUnique({
      where: { id: sportId },
    });

    if (!sport) return { error: "No sport founded !" };

    const athlete = await prisma.athlete.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        nickname: nickname,
        birthdate: birthdate,
        birthplace: birthplace,
        gender: gender,
        sport: {
          connect: { id: sport.id },
        },
      },
    });

    return { athlete };
  } catch (error) {
    return { error };
  }
};
