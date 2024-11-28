<?php

namespace App\Services;

use Symfony\Component\Mailer\MailerInterface;

class SymfonyMailerService extends \Symfony\Component\Mailer\Mailer
{
    public function __construct(MailerInterface $mailer)
    {
        parent::__construct($mailer);
    }
}
