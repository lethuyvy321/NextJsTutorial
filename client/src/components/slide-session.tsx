"use client";
import authApiRequest from "@/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";
import { differenceInHours } from "date-fns";
import React, { useEffect } from "react";

export default function SlideSession() {
  useEffect(() => {
    const interval = setInterval(async () => {
      const now = new Date();
      const expiresAt = new Date(clientSessionToken.expireAt);
      if (differenceInHours(expiresAt, now) < 1) {
        const res =
          await authApiRequest.slideSessionFromNextClientToNextServer();
        clientSessionToken.expireAt = res.payload.data.expiresAt;
      }
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);
  return null;
}
