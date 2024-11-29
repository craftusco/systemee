<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Artists table
        Schema::create('artists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('genre')->nullable();
            $table->timestamps();
        });

        // Clubs table
        Schema::create('clubs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('location');
            $table->timestamps();
        });

        // Events table
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->foreignId('club_id')->constrained('clubs')->onDelete('cascade');
            $table->timestamps();
        });

        // Event-Artist pivot table
        Schema::create('event_artist', function (Blueprint $table) {
            $table->id();
            $table->foreignId('event_id')->constrained('events')->onDelete('cascade');
            $table->foreignId('artist_id')->constrained('artists')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('event_artist');
        Schema::dropIfExists('events');
        Schema::dropIfExists('clubs');
        Schema::dropIfExists('artists');
    }
};
