<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Seed Artists
        for ($i = 0; $i < 100; $i++) {
            DB::table('artists')->insert([
                'name' => $faker->name,
                'genre' => $faker->word,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Seed Clubs
        for ($i = 0; $i < 50; $i++) {
            DB::table('clubs')->insert([
                'name' => $faker->company . ' Club',
                'location' => $faker->address,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Seed Events and associate with multiple artists
        for ($i = 0; $i < 150; $i++) {
            $eventId = DB::table('events')->insertGetId([
                'title' => $faker->sentence,
                'start_time' => $faker->dateTimeBetween('+1 days', '+10 days'),
                'end_time' => $faker->dateTimeBetween('+11 days', '+20 days'),
                'club_id' => $faker->numberBetween(1, 5),
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Associate the event with 1-3 random artists
            $artistIds = range(1, 100);
            shuffle($artistIds);
            foreach (array_slice($artistIds, 0, rand(1, 3)) as $artistId) {
                DB::table('event_artist')->insert([
                    'event_id' => $eventId,
                    'artist_id' => $artistId,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
