def towers(disc_count):
    tower_1 = [i for i in range(1, disc_count + 1)]
    tower_2 = []
    tower_3 = []

    def move_discs(disc_count, origin, stage, goal):
        if (disc_count == 1):
            disc = origin.pop(0)
            goal.insert(0, disc)

            return goal
        
        move_discs(disc_count - 1, origin, goal, stage)

        disc = origin.pop(0)
        goal.insert(0, disc)

        move_discs(disc_count - 1, stage, origin, goal)

        return goal
    return move_discs(disc_count, tower_1, tower_2, tower_3)